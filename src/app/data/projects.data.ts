import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

export const PROJECTS: Card[] = [
  {
    id: 1,
    name: 'Playwright Automation Framework',
    summary: 'An end-to-end UI test automation framework built with Playwright and TypeScript, following the Page Object Model design pattern with CI/CD integration via GitHub Actions.',
    description: "This framework was built to explore and demonstrate modern UI test automation practices outside of client work. It follows the Page Object Model to keep page interactions and test logic cleanly separated, and is written in TypeScript for stronger typing and maintainability. Playwright drives cross-browser test execution, and the framework is wired into GitHub Actions for continuous integration, so tests run automatically on every change. The project reflects the same framework-design principles applied professionally at Deutsche Bank while leading adoption of Playwright for UI test automation.",
    projectLink: 'https://github.com/jyoti-kuppanatti',
    tags: [Tag.PLAYWWRIGHT, Tag.TYPESCRIPT],
    pictures: []
  },
];
