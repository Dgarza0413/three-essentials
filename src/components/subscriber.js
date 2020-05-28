import React from "react"
import { css } from "@emotion/core"
import "twin.macro"

const inputClass = css`
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  color: black;
`
export default function Subscriber() {
    return (
        <div tw="m-5 p-5 justify-start self-center bg-blue-500 ">
            <label tw="m-5">Email:
            <input
                    css={inputClass}
                    type="text"
                    name="name"
                />
            </label>
            <button tw="p-2 m-2 bg-blue-100" type='submit'>Submit</button>
        </div>
    )
}
