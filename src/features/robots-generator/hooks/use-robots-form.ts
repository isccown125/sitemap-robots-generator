import { useForm } from "react-hook-form";
import { useRobots } from "./use-robots";
import { createZodResolver } from "../../../utils";
import {
  RobotsRuleFormData,
  robotsSchema,
} from "../validators/robots.validator";

export const useRobotsForm = () => {
  const { addRule } = useRobots();

  const form = useForm<RobotsRuleFormData>({
    resolver: createZodResolver(robotsSchema),
    defaultValues: {
      type: "allow",
      userAgent: "*",
      value: "",
    },
  });

  const onSubmit = (data: RobotsRuleFormData) => {
    addRule(data);
    form.reset();
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
