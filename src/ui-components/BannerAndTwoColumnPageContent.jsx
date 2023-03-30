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
export default function BannerAndTwoColumnPageContent(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        ContentTop: {},
        ContentLeft: {},
        ContentRight: {},
        Columns: {},
        BannerAndTwoColumnPageContent: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        ContentTop: { gap: "10px", padding: "10px 10px 10px 10px" },
        ContentLeft: { gap: "16px", width: "444px" },
        ContentRight: { gap: "16px", width: "444px" },
        Columns: {
          gap: "16px",
          direction: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "0px 0px 0px 0px",
        },
        BannerAndTwoColumnPageContent: {
          gap: "16px",
          width: "476px",
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
      gap="24px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "BannerAndTwoColumnPageContent")}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "ContentTop")}
      ></Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="16px 12px 16px 12px"
        display="flex"
        {...getOverrideProps(overrides, "Columns")}
      >
        <Flex
          gap="6px"
          direction="column"
          width="688px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "ContentLeft")}
        ></Flex>
        <Flex
          gap="6px"
          direction="column"
          width="688px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "ContentRight")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
