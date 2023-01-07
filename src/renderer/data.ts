import { Configuration } from "./utils/InstallerConfiguration";

export const defaultConfiguration: Configuration = {
    version: 1,
    publishers: [
        {
            name: 'FlyWithJet Simulations',
            key: 'flywithjetsim',
            logoUrl: 'http://5.135.142.124:443/path15028.ico',
            defs: [
                {
                    kind: 'addonCategory',
                    key: 'aircraft',
                    title: 'Aircraft',
                },
                {
                    kind: 'addonCategory',
                    key: 'scenery',
                    title: 'Scenery',
                },
                {
                    kind: 'addonCategory',
                    key: 'simbridge',
                    styles: ['align-bottom'],
                },
                {
                    kind: 'externalApp',
                    key: 'mcdu-server',
                    prettyName: 'MCDU Server',
                    detectionType: 'ws',
                    url: 'ws://localhost:8380',
                },
                {
                    kind: 'externalApp',
                    key: 'simbridge-app',
                    prettyName: 'SimBridge',
                    detectionType: 'http',
                    url: 'http://localhost:8380/health',
                    killUrl: 'http://localhost:8380/health/kill',
                    killMethod: 'GET',
                },
                {
                    kind: 'externalApp',
                    key: 'msfs',
                    prettyName: 'MSFS',
                    detectionType: 'tcp',
                    port: 500,
                },
            ],
            addons: [
                {
                    key: 'A318',
                    name: 'A318',
                    repoOwner: 'flywithjetsim',
                    repoName: 'A318_MFS',
                    category: '@aircraft',
                    aircraftName: 'A318-111',
                    titleImageUrl: 'http://5.135.142.124:443/dark.svg',
                    titleImageUrlSelected: 'http://5.135.142.124:443/light.svg',
                    enabled: true,
                    // TODO: Change this
                    backgroundImageUrls: ['https://raw.githubusercontent.com/headwind-msfs/branding/main/images/installer_bg.png'],
                    shortDescription: 'Airbus A318-111',
                    description: 'The A320neo (new engine option) is one of many upgrades introduced by Airbus to help maintain ' +
                        'its A320 product line’s position as the world’s most advanced and fuel-efficient single-aisle ' +
                        'aircraft family. The baseline A320neo jetliner has a choice of two new-generation engines ' +
                        '(the PurePower PW1100G-JM from Pratt and Whitney and the LEAP-1A from CFM International) ' +
                        'and features large, fuel-saving wingtip devices known as Sharklets.',
                    techSpecs: [
                        {
                            name: 'Engines',
                            value: 'CFM 56-5B',
                        },
                        {
                            name: 'APU',
                            value: 'APIC APS3200',
                        },
                    ],
                    targetDirectory: 'flywithjet-aircraft-a318',
                    alternativeNames: [
                        'A318',
                        'a318',
                    ],
                    tracks: [
                        {
                            name: 'Stable',
                            key: 'A318-stable',
                            url: 'https://github.com/FlyWithJet/A318_MFS/releases/latest',
                            description: 'Stable is our variant that has the least bugs and best performance. ' +
                                'This version will not always be up to date but we guarantee its compatibility ' +
                                'with each major patch from MSFS.',
                            isExperimental: false,
                            releaseModel: {
                                type: 'githubRelease',
                            },
                        },
                        {
                            name: 'Development',
                            key: 'A318-dev',
                            url: 'https://github.com/flywithjet/a318-MFS/releases/download/vdevelopment/',
                            description: 'Development will have the latest features that will end up in the next stable. ' +
                                'Bugs are to be expected. It updates whenever something is added to the \'master\' ' +
                                'branch on Github. Please visit our discord for support.',
                            isExperimental: false,
                            releaseModel: {
                                type: 'githubBranch',
                                branch: 'development',
                            },
                        },
                    ],
                    incompatibleAddons: [],
                    myInstallPage: {
                        links: [
                            {
                                url: 'https://docs.flywithjetsim.com/a318/',
                                title: 'Documentation',
                            },
                        ],
                        directories: [
                            {
                                location: {
                                    in: 'packageCache',
                                    path: 'work',
                                },
                                title: 'Work Folder',
                            },
                        ],
                    },
                },
            ],
            buttons: [
                {
                    text: 'Documentation',
                    action: 'openBrowser',
                    url: 'https://docs.flywithjetsim.com/',
                },
                {
                    text: 'Website',
                    action: 'openBrowser',
                    url: 'https://www.flywithjetsim.com/',
                },
                {
                    text: 'Discord',
                    action: 'openBrowser',
                    url: 'https://discord.gg/NywFPeNDEa',
                },
                {
                    text: 'Twitter',
                    action: 'openBrowser',
                    url: 'https://twitter.com/FlyByWireSim',
                    inline: true,
                },
            ],
        },
    ],
};