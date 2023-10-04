import { Ensure, equals } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { describe, it } from 'mocha';

import { GitHubStatus } from '../src/github';
import { Homepage } from '../src/serenity';

describe('Serenity/JS Website', () => {

    it(`tells people what the framework can help them do`, async () => {

        await actorCalled('Alice').attemptsTo(

            // You can use API interactions to ensure services are up and running before performing any UI checks,
            // or to manage test data
            GitHubStatus.ensureAllSystemsOperational(),

            Homepage.open(),

            Ensure.that(
                Homepage.heroBannerHeadingText(),
                equals('Enable collaborative test automation at any scale!')
            ),
        )
    });
});
