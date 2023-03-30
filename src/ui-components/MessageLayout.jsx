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
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function MessageLayout(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        MessageText: {},
        TextContainer: {},
        ProfileImage: {},
        ImageWrapper: {},
        TimeStamp: {},
        SenderInfo: {},
        MessageLayout: {},
      },
      variantValues: { type: "incoming" },
    },
    {
      overrides: {
        MessageText: { color: "rgba(255,255,255,1)" },
        TextContainer: {
          borderRadius: "40px 0px 40px 40px",
          backgroundColor: "rgba(31,133,249,1)",
        },
        ProfileImage: {},
        ImageWrapper: { display: "none" },
        TimeStamp: {},
        SenderInfo: {},
        MessageLayout: { alignItems: "flex-end" },
      },
      variantValues: { type: "outgoing" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="348px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "MessageLayout")}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="0px 40px 40px 40px"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(239,240,240,1)"
        display="flex"
        {...getOverrideProps(overrides, "TextContainer")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="500"
          color="rgba(13,26,38,1)"
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
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          {...getOverrideProps(overrides, "MessageText")}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "SenderInfo")}
      >
        <Flex
          gap="0"
          direction="row"
          width="34px"
          height="34px"
          justifyContent="flex-start"
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
            width="34px"
            height="35.7px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "ProfileImage")}
          ></Image>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(125,129,132,1)"
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
          children="Sent 10:12 AM"
          {...getOverrideProps(overrides, "TimeStamp")}
        ></Text>
      </Flex>
    </Flex>
  );
}
