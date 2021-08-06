import { Ensure, includes } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { by, Click, Navigate, Target, Website } from '@serenity-js/webdriverio';
import { describe, it } from 'mocha';

describe('serenity-js.org website', () => {

    const acceptCookiesButton = Target.the('accept cookies button').located(by.css('.cookieinfo-close'))

    it(`tells people what they're reading`, () =>
        actorCalled('Alice').attemptsTo(
            Navigate.to('https://serenity-js.org'),
            Click.on(acceptCookiesButton),
            Ensure.that(Website.title(), includes('Serenity/JS')),
        ));
});
