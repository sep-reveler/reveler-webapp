/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function CommentItem(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="column"
      width="390px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="12px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CommentItem")}
    >
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
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
          borderRadius="32px"
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
          {...getOverrideProps(overrides, "ContentLayout")}
        >
          <Flex
            gap="2.799999952316284px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TextColumn")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="500"
              color="rgba(12,20,31,1)"
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
              children="Amanda Boyton:"
              {...getOverrideProps(overrides, "UserName")}
            ></Text>
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
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Hope you’re enjoying your vacation ! That is a beautiful image you posted :)"
              {...getOverrideProps(overrides, "CommentText")}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="16px"
            padding="6px 8px 6px 8px"
            backgroundColor="rgba(250,250,250,1)"
            {...getOverrideProps(overrides, "ReplyButton")}
          >
            <View
              width="24px"
              height="24px"
              {...getOverrideProps(overrides, "MyIcon")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(12,20,31,1)"
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
              children="Reply Comment"
              {...getOverrideProps(overrides, "ReplyButtonText")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <View
        width="unset"
        height="1px"
        {...getOverrideProps(overrides, "Divider")}
      ></View>
    </Flex>
  );
}
