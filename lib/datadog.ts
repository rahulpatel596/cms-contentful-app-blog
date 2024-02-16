import { datadogRum } from '@datadog/browser-rum'
import { CONTENTSTACK_ENVIRONMENT, DATADOG_APPLICATION_ID, DATADOG_CLIENT_TOKEN, DATADOG_REPLAY, DATADOG_SAMPLE_RATE, DATADOG_SERVICE, DATADOG_SITE } from '@modules/general/constants'


export const initializeRUM = () => {


    if (! datadogRum.getInternalContext()) {
        
        datadogRum.init({
            applicationId: process.env.DATA_DOG_APP_ID || '',
            clientToken: process.env.DATA_DOG_CLIENT_TOKEN || '',
            site: 'us5.datadoghq.com',
            service: 'cms-contentful-blog',
            env: 'prod',
            // Specify a version number to identify the deployed version of your application in Datadog
            // version: '1.0.0', 
            sessionSampleRate: 100,
            sessionReplaySampleRate: 100,
            trackUserInteractions: true,
            trackResources: true,
            trackLongTasks: true,
            defaultPrivacyLevel: 'mask-user-input',
        });

        datadogRum.startSessionReplayRecording()
    
    }
}