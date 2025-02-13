import React from "react";
import { useRobots } from "../hooks/use-robots";
import {
  RulesList,
  RuleItem,
  RuleContent,
  RuleHeader,
  RuleType,
  RuleValue,
} from "../styles";
import { DeleteButton } from "../../../styles/common.styles";

export const RobotsList: React.FC = () => {
  const { rules, deleteRule } = useRobots();

  if (rules.length === 0) {
    return (
      <div>
        Brak dodanych reguł. Dodaj pierwszą regułę używając formularza powyżej.
      </div>
    );
  }

  return (
    <RulesList>
      {rules.map((rule) => (
        <RuleItem key={rule.id}>
          <RuleContent>
            <RuleHeader>
              <RuleType>{rule.type}</RuleType>
              {rule.userAgent && rule.userAgent !== "*" && (
                <RuleType>{rule.userAgent}</RuleType>
              )}
            </RuleHeader>
            <RuleValue>{rule.value}</RuleValue>
          </RuleContent>
          <DeleteButton onClick={() => deleteRule(rule.id)}>Usuń</DeleteButton>
        </RuleItem>
      ))}
    </RulesList>
  );
};
