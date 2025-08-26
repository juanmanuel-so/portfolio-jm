// tailwind.config.ts
const tailwind_config =  {
  darkMode: ["class", 'body'], // añade 'body' como selector válido
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default tailwind_config