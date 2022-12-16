import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { coffeeRouter } from "./coffee";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  coffee: coffeeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
