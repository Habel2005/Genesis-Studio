'use server';
/**
 * @fileOverview A Genkit flow that generates a concise consultation brief from client project details.
 *
 * - generateConsultationBrief - A function that handles the brief generation process.
 * - ConsultationBriefGeneratorInput - The input type for the generateConsultationBrief function.
 * - ConsultationBriefGeneratorOutput - The return type for the generateConsultationBrief function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ConsultationBriefGeneratorInputSchema = z.object({
  companyName: z.string().describe("The name of the client's company."),
  projectDescription: z
    .string()
    .describe(
      'A high-level description of the web design project (e.g., "new e-commerce website", "redesign existing portfolio").'
    ),
  goals: z
    .string()
    .describe('The primary goals the client wants to achieve with this project (e.g., "increase online sales", "improve brand visibility").'),
  targetAudience: z
    .string()
    .describe('The primary target audience for the website (e.g., "young professionals", "small business owners").'),
  keyFeatures: z
    .string()
    .describe('A comma-separated list or short description of essential features required (e.g., "user login, product catalog, payment gateway").'),
  designAesthetic: z
    .string()
    .describe('Preferred design style and aesthetic (e.g., "modern, minimalist, dark theme", "colorful and playful").'),
  budget: z
    .string()
    .optional()
    .describe('An indication of the client\'s budget range (e.g., "undisclosed", "small", "medium", "large").'),
  timeline: z
    .string()
    .optional()
    .describe('Desired project completion timeline (e.g., "within 3 months", "flexible", "urgent").'),
});
export type ConsultationBriefGeneratorInput = z.infer<typeof ConsultationBriefGeneratorInputSchema>;

const ConsultationBriefGeneratorOutputSchema = z.object({
  briefTitle: z.string().describe('A concise title for the consultation brief.'),
  overview: z.string().describe('A brief, high-level summary of the project and its purpose.'),
  clientGoals: z.string().describe('A detailed summary of the primary objectives the client aims to achieve.'),
  targetDemographic: z.string().describe('A clear description of the intended users for the website.'),
  coreFunctionality: z.string().describe('A summary of the essential features and functionalities requested.'),
  visualStyle: z.string().describe('A description of the preferred design aesthetic and branding considerations.'),
  projectEstimate: z
    .string()
    .describe(
      'An AI-generated preliminary estimation or scope indication based on the provided details (e.g., "This project appears to be a medium-sized e-commerce build.", "Given the details, this seems like a quick redesign project.").'
    ),
  nextStepsRecommendation: z
    .string()
    .describe(
      'Recommendations for the agency\'s next steps before the consultation (e.g., "Prepare examples of minimalist dark-themed e-commerce sites.", "Research CRM integrations.").'
    ),
});
export type ConsultationBriefGeneratorOutput = z.infer<typeof ConsultationBriefGeneratorOutputSchema>;

const prompt = ai.definePrompt({
  name: 'consultationBriefPrompt',
  input: { schema: ConsultationBriefGeneratorInputSchema },
  output: { schema: ConsultationBriefGeneratorOutputSchema },
  prompt: `You are an AI assistant for a high-end web design agency specializing in AI-powered design. Your task is to generate a concise, professional, and actionable consultation brief based on the client's provided project details. This brief will be used by our team to prepare for an initial discussion, ensuring we understand the client's needs from the start.\n\nCarefully analyze the following information and generate a brief that is structured according to the output schema. Ensure all fields in the output schema are populated with relevant, extracted, or inferred information.\n\nClient Project Details:\nCompany Name: {{{companyName}}}\nProject Description: {{{projectDescription}}}\nGoals: {{{goals}}}\nTarget Audience: {{{targetAudience}}}\nKey Features: {{{keyFeatures}}}\nDesign Aesthetic: {{{designAesthetic}}}\n{{#if budget}}Budget Indication: {{{budget}}}{{/if}}\n{{#if timeline}}Timeline: {{{timeline}}}{{/if}}\n\nConsider the agency's expertise in "AI-powered design" when formulating the 'projectEstimate' and 'nextStepsRecommendation' to reflect a modern, efficient approach.\n`
});

const consultationBriefGeneratorFlow = ai.defineFlow(
  {
    name: 'consultationBriefGeneratorFlow',
    inputSchema: ConsultationBriefGeneratorInputSchema,
    outputSchema: ConsultationBriefGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate consultation brief output.');
    }
    return output;
  }
);

export async function generateConsultationBrief(
  input: ConsultationBriefGeneratorInput
): Promise<ConsultationBriefGeneratorOutput> {
  return consultationBriefGeneratorFlow(input);
}
