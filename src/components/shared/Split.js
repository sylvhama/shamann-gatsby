import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(2rem);
    opacity: 0;
  }
`;

const rainbow = keyframes`
  0% { color: hsl(0turn, 90%, 65%); }
  25% { color: hsl(.25turn, 90%, 65%); }
  50% { color: hsl(.5turn, 90%, 65%); }
  75% { color: hsl(.75turn, 90%, 65%); }
  100% { color: hsl(1turn, 90%, 65%); }
`;

const floating = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const Text = styled.div`
  padding-bottom: 0.75rem;
  font-family: ${props => props.theme.font.mono};
  font-size: 2.25rem;
  text-transform: uppercase;
  text-align: center;
  opacity: ${props => (props.invisible ? '0' : '1')};

  @media (max-width: ${props => props.theme.breakpoint}) {
    font-size: 1.25rem;
  }
`;

const Char = styled.span`
  display: inline-block;
  white-space: break-spaces;
`;

const SlidingChar = styled(Char)`
  animation: ${slideIn} 1s cubic-bezier(0.5, 0, 0.5, 1) both;
  animation-delay: ${props => props.index * 60}ms;
`;

const RainbowChar = styled(Char)`
  animation: ${rainbow} 2s linear infinite, ${floating} 1s ease-in-out infinite;
  animation-delay: ${props => props.index * 60}ms;
`;

export function Split({ text, invisible }) {
  const isAnimatable =
    invisible &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  return (
    <Text aria-hidden invisible={invisible}>
      {isAnimatable
        ? text.split('').map((char, index) => {
            return (
              <SlidingChar key={index} index={index}>
                <RainbowChar index={index}>{char}</RainbowChar>
              </SlidingChar>
            );
          })
        : text}
    </Text>
  );
}
