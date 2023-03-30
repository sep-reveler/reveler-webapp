/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function ListLayout(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="245px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="16px"
      padding="16px 12px 16px 12px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ListLayout")}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="6px 0px 6px 0px"
        {...getOverrideProps(overrides, "TitleLayout")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="500"
          color="rgba(12,20,31,1)"
          lineHeight="16.94318199157715px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="List Title"
          {...getOverrideProps(overrides, "TitleText")}
        ></Text>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "TitleIcon")}
        ></View>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ComponentSlot")}
      ></Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="8px 0px 1px 0px"
        {...getOverrideProps(overrides, "ButtonWrapper")}
      >
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "ListButton")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
