"use client";
import {
  domAnimation,
  LazyMotion,
  MotionConfig as MotionProvider,
} from "framer-motion";
import * as React from "react";

interface FramerMotionProviderProps {
  children: React.ReactNode;
}

function FramerMotionProvider({ children }: FramerMotionProviderProps) {
  return (
    <MotionProvider reducedMotion="user">
      <LazyMotion strict features={domAnimation}>
        {children}
      </LazyMotion>
    </MotionProvider>
  );
}

export default FramerMotionProvider;
