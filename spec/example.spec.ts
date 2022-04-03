import { Ensure, includes } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { By, Click, Navigate, Page, PageElement } from '@serenity-js/web';
import { describe, it } from 'mocha';

describe('serenity-js.org website', () => {

    const acceptCookiesButton = PageElement.located(By.css('.cookieinfo-close')).describedAs('accept cookies button')

    it(`tells people what they're reading`, () =>
        actorCalled('Alice').attemptsTo(
            Navigate.to('https://serenity-js.org'),
            Click.on(acceptCookiesButton),
            
            Ensure.that(Page.current().title(), includes('Serenity/JS')),
        ));
});
