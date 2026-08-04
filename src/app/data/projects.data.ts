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
  {
    id: 2,
    name: 'Selenium Java Automation Framework',
    summary: 'An end-to-end UI test automation framework built with Selenium WebDriver and Java, following the Page Object Model design pattern.',
    description: "This framework demonstrates UI test automation practices using Selenium WebDriver and Java. It follows the Page Object Model to keep page interactions and test logic cleanly separated, and uses JUnit for structuring and running the test suite. The project showcases the same test automation principles applied professionally, adapted here as a standalone Java-based framework.",
    projectLink: 'https://github.com/jyoti-kuppanatti/selenium-java-automation-framework',
    tags: [Tag.SELENIUM, Tag.JAVA, Tag.JUNIT],
    pictures: []
  },
  {
    id: 3,
    name: 'Angular Portfolio App',
    summary: 'A personal portfolio web application built with Angular and TypeScript, showcasing projects and experience with a clean, responsive UI.',
    description: "This portfolio site is built with Angular and TypeScript, using a component-driven architecture to present projects, experience, and skills in a clean, responsive layout. It's styled with HTML5 and CSS3, and structured to make it easy to add new projects over time.",
    projectLink: 'https://github.com/jyoti-kuppanatti/angular-portfolio-app',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3],
    pictures: []
  },
  {
    id: 4,
    name: 'Playwright Java Framework',
    summary: 'An end-to-end UI test automation framework built with Playwright and Java, following the Page Object Model design pattern.',
    description: "This framework demonstrates UI test automation practices using Playwright with Java. It follows the Page Object Model to keep page interactions and test logic cleanly separated, and uses JUnit for structuring and running the test suite. The project showcases the same test automation principles applied professionally, adapted here as a standalone Java-based Playwright framework.",
    projectLink: 'https://github.com/jyoti-kuppanatti/playwright-java-framework',
    tags: [Tag.PLAYWWRIGHT, Tag.JAVA, Tag.JUNIT],
    pictures: []
  },
];
