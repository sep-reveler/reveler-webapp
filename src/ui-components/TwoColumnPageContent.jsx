/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, useBreakpointValue } from "@aws-amplify/ui-react";
export default function TwoColumnPageContent(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        ContentLeft: {},
        ContentRight: {},
        TwoColumnPageContent: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        ContentLeft: { gap: "16px", shrink: "0", alignSelf: "stretch" },
        ContentRight: { gap: "16px", shrink: "0", alignSelf: "stretch" },
        TwoColumnPageContent: {
          gap: "16px",
          direction: "column",
          width: "476px",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "16px 16px 16px 16px",
        },
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="32px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="24px 16px 24px 16px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "TwoColumnPageContent")}
    >
      <Flex
        gap="6px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "ContentLeft")}
      ></Flex>
      <Flex
        gap="6px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "ContentRight")}
      ></Flex>
    </Flex>
  );
}
