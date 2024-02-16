import { datadogRum } from '@datadog/browser-rum'


export const initializeRUM = () => {
    if (!datadogRum.getInternalContext()) {
        
        datadogRum.init({
            applicationId: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID || '',
            clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN || '',
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