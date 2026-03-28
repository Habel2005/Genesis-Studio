'use server';
/**
 * @fileOverview A Genkit flow that generates an initial project concept for a website
 * based on high-level client details.
 *
 * - generateProjectConcept - A function that handles the project concept generation process.
 * - ProjectConceptGeneratorInput - The input type for the generateProjectConcept function.
 * - ProjectConceptGeneratorOutput - The return type for the generateProjectConcept function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the project concept generator
const ProjectConceptGeneratorInputSchema = z.object({
  websitePurpose: z
    .string()
    .describe(
      'The primary purpose of the website, e.g., "e-commerce platform", "personal portfolio", "corporate blog".'
    ),
  industry: z
    .string()
    .describe(
      'The industry the website operates in, e.g., "fashion retail", "financial services", "digital marketing".'
    ),
  keyFunctionalities: z
    .array(z.string())
    .describe(
      "A list of key functionalities the website should have, e.g., 'user authentication', 'product catalog', 'blogging system'."
    ),
  targetUsers: z
    .string()
    .describe('Who is the primary target audience for the website?'),
  desiredTone: z
    .string()
    .describe(
      "Describe the desired tone and style of the website, e.g., 'modern and minimalist', 'playful and vibrant', 'professional and authoritative'."
    ),
});
export type ProjectConceptGeneratorInput = z.infer<
  typeof ProjectConceptGeneratorInputSchema
>;

// Define the output schema for the generated project concept
const ProjectConceptGeneratorOutputSchema = z.object({
  projectName: z.string().describe('A suggested, catchy name for the project.'),
  tagline: z
    .string()
    .describe('A compelling, short tagline for the website.'),
  projectSummary: z
    .string()
    .describe('A concise summary of the proposed website project.'),
  detailedFeatures: z
    .array(z.string())
    .describe('A detailed list of the core features and functionalities.'),
  designAesthetic: z
    .string()
    .describe(
      'A description of the recommended visual design aesthetic and user experience.'
    ),
  targetAudienceInsight: z
    .string()
    .describe(
      'Insights into the target audience and how the design caters to their needs and preferences.'
    ),
  valueProposition: z
    .string()
    .describe("How the proposed website will benefit the client's brand or business."),
});
export type ProjectConceptGeneratorOutput = z.infer<
  typeof ProjectConceptGeneratorOutputSchema
>;

// Define the prompt for the LLM
const projectConceptPrompt = ai.definePrompt({
  name: 'projectConceptGeneratorPrompt',
  input: {schema: ProjectConceptGeneratorInputSchema},
  output: {schema: ProjectConceptGeneratorOutputSchema},
  prompt: `You are an expert AI web design agency assistant. Your task is to take high-level details about a client's desired website and generate a comprehensive project concept.

Focus on translating their vision into a concrete plan, emphasizing modern design, user experience, and potential for growth.

Client's Vision:
Website Purpose: {{{websitePurpose}}}
Industry: {{{industry}}}
Key Functionalities:
{{#each keyFunctionalities}}- {{{this}}}
{{/each}}
Target Users: {{{targetUsers}}}
Desired Tone/Style: {{{desiredTone}}}

Based on this, generate a project concept that includes:
1.  A catchy project name.
2.  A compelling tagline.
3.  A concise project summary.
4.  A detailed list of core features and functionalities.
5.  A description of the recommended visual design aesthetic and user experience.
6.  Insights into the target audience and how the design caters to them.
7.  A clear value proposition for the client.

Ensure the output is structured to directly fit the provided JSON schema.`,
});

// Define the Genkit flow
const projectConceptGeneratorFlow = ai.defineFlow(
  {
    name: 'projectConceptGeneratorFlow',
    inputSchema: ProjectConceptGeneratorInputSchema,
    outputSchema: ProjectConceptGeneratorOutputSchema,
  },
  async input => {
    // Generate the project concept using the prompt
    const {output} = await projectConceptPrompt(input);
    if (!output) {
      throw new Error('Failed to generate project concept output.');
    }
    return output;
  }
);

// Wrapper function to call the flow
export async function generateProjectConcept(
  input: ProjectConceptGeneratorInput
): Promise<ProjectConceptGeneratorOutput> {
  return projectConceptGeneratorFlow(input);
}
