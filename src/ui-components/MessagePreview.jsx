/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function MessagePreview(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="388px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="32px 32px 32px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MessagePreview")}
    >
      <Flex
        gap="16px"
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
        {...getOverrideProps(overrides, "ContentLayout")}
      >
        <Flex
          gap="0"
          direction="row"
          width="40px"
          height="40px"
          justifyContent="flex-start"
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
            height="42px"
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
        <Flex
          gap="6px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "InfoLayout")}
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="John Doe"
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
            height="15px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Hey are we still on for tomorrow? I Was thinking that we could hit up a coffee shop!"
            {...getOverrideProps(overrides, "MessageText")}
          ></Text>
        </Flex>
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "TimeLayout")}
        >
          <Text
            fontFamily="Inter"
            fontSize="10px"
            fontWeight="400"
            color="rgba(125,129,132,1)"
            lineHeight="12.102272033691406px"
            textAlign="right"
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
            children="42m"
            {...getOverrideProps(overrides, "TimeStamp")}
          ></Text>
          <Icon
            width="7px"
            height="7px"
            viewBox={{ minX: 0, minY: 0, width: 7, height: 7 }}
            paths={[
              {
                d: "M7 3.5C7 5.433 5.433 7 3.5 7C1.567 7 0 5.433 0 3.5C0 1.567 1.567 0 3.5 0C5.433 0 7 1.567 7 3.5Z",
                fill: "rgba(33,133,249,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "UnreadIcon")}
          ></Icon>
        </Flex>
      </Flex>
    </Flex>
  );
}
