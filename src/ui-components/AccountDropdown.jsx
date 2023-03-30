/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function AccountDropdown(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 8px 0px 8px"
      {...rest}
      {...getOverrideProps(overrides, "AccountDropdown")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="18px"
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
        children="User Name"
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Flex
        gap="0"
        direction="row"
        width="40px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="128px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ImageWrapper")}
      >
        <Image
          width="40px"
          height="40px"
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
    </Flex>
  );
}
