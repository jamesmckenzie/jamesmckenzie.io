import { ActionFunction, json } from "@remix-run/node";
import { getColorScheme, colorSchemeCookie } from "~/cookies";

export const action: ActionFunction = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme = currentColorScheme === "light" ? "dark" : "light";

  return json(
    { success: true },
    {
      headers: {
        "Set-Cookie": await colorSchemeCookie.serialize(newColorScheme),
      },
    }
  );
};
