export default defineNuxtPlugin(() => {
  const hello = (message: string) => `hello ${message}`;
  return {
    provide: {
      hello, // This will be accessible as $hello
    },
  };
});
