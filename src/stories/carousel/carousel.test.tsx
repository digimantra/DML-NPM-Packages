/**
 * @jest-environment jsdom
 */

import React from "react";
import { composeStory } from "@storybook/react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Meta, { Default } from "./carousel.stories";

const Def = composeStory( Default, Meta );

test( "Renders An Carousel", () => {
  render( <Def /> );
  const BodyElement = screen.queryByTestId( "adp-carousel" );
  expect( BodyElement ).not.toBeNull();
});

test( "Test Next button click", () => {
  render( <Def /> );
  fireEvent.click( screen.getByLabelText( "next" ));
  const valueElement = screen.getByText( "2. This is Carousel" );
  expect( valueElement ).not.toBeNull();
});

test( "Test Prev button disabled case", () => {
  render( <Def /> );
  const prevBtn = screen.getByLabelText( "previous" );
  expect( prevBtn.hasAttribute( "disabled" ));
});

test( "Test onChange event", async () => {
  const mockCallback = jest.fn(() => null );
  render( <Def
    onChange={mockCallback}
  /> );
  fireEvent.click( screen.getByLabelText( "next" ));
  await waitFor(() => {
  // Called initially and after re-render
    expect( mockCallback.mock.calls.length ).toBe( 2 );
  });
});
