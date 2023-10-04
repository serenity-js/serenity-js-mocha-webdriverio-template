import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { By, Navigate, Page, PageElement, Text } from '@serenity-js/web';

/**
 * Learn more about web testing with Serenity/JS
 *  https://serenity-js.org/handbook/web-testing/
 */
export class Homepage {
    // Questions allow actors to retrieve information about the system under test and its environment.
    // PageElement is a question that helps actors identify web elements of interest
    private static heroBannerHeading = () =>
        PageElement.located(By.css('h1'));

    // Questions like PageElement can be composed with other questions to transform the returned value
    // Question about Text retrieves the text content of a web element
    static heroBannerHeadingText = () =>
        Text.of(Homepage.heroBannerHeading())
            // Questions provide a QuestionAdapter interface that allows you to chain additional transformations
            // of the returned value. For example, you might want to replace all new line characters:
            .replaceAll('\n', ' ')
            // You can set custom description to be used in the reports if needed:
            .describedAs('hero banner text');

    // Tasks are reusable units of business logic that can be composed into user workflows.
    // You can organise them in any way you like, e.g. per page, per feature, per domain, etc.
    static open = () =>
        Task.where(`#actor opens Serenity/JS homepage`,
            Navigate.to('https://serenity-js.org'),
            Ensure.that(
                Page.current().title().describedAs('homepage title'),
                includes('Serenity/JS')
            ),
        )
}