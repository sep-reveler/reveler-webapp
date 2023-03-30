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
import { Flex, Image, Text, useBreakpointValue } from "@aws-amplify/ui-react";
export default function ProfileBanner(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Image: {},
        ImageWrapper: {},
        UserName: {},
        UserAddress: {},
        UserDetails: {},
        FollowButton: {},
        MessageButton: {},
        ButtonGroup: {},
        TextContent: {},
        ProfileBanner: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Image: { height: "unset", shrink: "1", grow: "1", basis: "0" },
        ImageWrapper: { width: "180px", height: "180px" },
        UserName: {},
        UserAddress: { fontSize: "10px", lineHeight: "12.102272033691406px" },
        UserDetails: { fontSize: "12px", textAlign: "center" },
        FollowButton: {},
        MessageButton: {},
        ButtonGroup: {},
        TextContent: {
          alignItems: "center",
          shrink: "0",
          alignSelf: "stretch",
        },
        ProfileBanner: {
          gap: "32px",
          direction: "column",
          width: "388px",
          height: "unset",
          padding: "24px 12px 24px 12px",
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
      gap="48px"
      direction="row"
      width="1211px"
      height="245px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="48px 10px 48px 48px"
      backgroundColor="rgba(0,0,0,1)"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "ProfileBanner")}
    >
      <Flex
        gap="0"
        direction="column"
        width="155px"
        height="155px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="128px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "ImageWrapper")}
      >
        <Image
          width="unset"
          height="176px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Image")}
        ></Image>
      </Flex>
      <Flex
        gap="10px"
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
        {...getOverrideProps(overrides, "TextContent")}
      >
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="21.784090042114258px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Franky Sinatra"
          {...getOverrideProps(overrides, "UserName")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="14.522727012634277px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="New York, USA"
          {...getOverrideProps(overrides, "UserAddress")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="DJ @ Darwin Nightclub in Manhatten&#xA;Keeping secrets is totally easy for me. However, this ain’t the case for the people I tell them to."
          {...getOverrideProps(overrides, "UserDetails")}
        ></Text>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "ButtonGroup")}
        >
          <Flex
            width="unset"
            height="unset"
            {...getOverrideProps(overrides, "FollowButton")}
          ></Flex>
          <Flex
            width="unset"
            height="unset"
            {...getOverrideProps(overrides, "MessageButton")}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
