export const SelectFilterOptions = {
       userType: {
        type: 'select',
        options: [
            { labelKey: 'musician', value: 'musician' },
            { labelKey: 'musicBuyer', value: 'musicBuyer' },
            { labelKey: 'musicAgent', value: 'musicAgent' },
        ],
    },
    musicFormat: {
        options: [
            { labelKey: 'mp4', value: 'mp4' },
            { labelKey: 'wav', value: 'wav' },
            { labelKey: 'mp3', value: 'mp3' },
        ],
        type: 'select',
    },
    musicGenres: {
        options: [
            { labelKey: 'rap', value: 'rap' },
            { labelKey: 'reggae', value: 'reggae' },
            { labelKey: 'hip-hop', value: 'hip-hop' },
            { labelKey: 'pop', value: 'pop' },
            { labelKey: 'rnb', value: 'rnb' },
            { labelKey: 'rock', value: 'rock' },      
            { labelKey: 'rocknroll', value: 'rock-and-roll' },
            
        ],
        type: 'select',
}
}
