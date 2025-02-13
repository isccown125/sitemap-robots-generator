import { z } from "zod";

type ResolverResult = {
  values: any;
  errors: Record<string, { type: string; message: string }>;
};

export const createZodResolver =
  (schema: z.ZodSchema) =>
  async (values: any): Promise<ResolverResult> => {
    try {
      const validatedData = await schema.parseAsync(values);
      return {
        values: validatedData,
        errors: {},
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.reduce((acc, curr) => {
          const path = curr.path.join(".");
          return {
            ...acc,
            [path]: {
              type: "validation",
              message: curr.message,
            },
          };
        }, {});

        return {
          values: {},
          errors,
        };
      }

      return {
        values: {},
        errors: {
          root: {
            type: "validation",
            message: "Wystąpił błąd walidacji",
          },
        },
      };
    }
  };
