export const selectFilterOptions = {
	payrollEnquiry: {
		type: 'select',
		options: [
			{ label: 'Incorrect-Pay', value: 'Incorrect Pay' },
			{ label: 'Missing-Expense', value: 'Missing Expense' },
			{ label: 'Change-of-Bank-Details', value: 'Change of Bank Details' },
			{ label: 'Change-of-Address', value: 'Change of Address' },
			{ label: 'Other', value: 'Other' }
		]
	},
	userType: {
		type: 'select',
		options: [
			{ label: 'musician', value: 'musician' },
			{ label: 'musicBuyer', value: 'musicBuyer' },
			{ label: 'musicAgent', value: 'musicAgent' }
		]
	},
	musicFormat: {
		options: [ { label: 'mp4', value: 'mp4' }, { label: 'wav', value: 'wav' }, { label: 'mp3', value: 'mp3' } ],
		type: 'select'
	},
	musicGenres: {
		options: [
			{ label: 'rap', value: 'rap' },
			{ label: 'reggae', value: 'reggae' },
			{ label: 'hip-hop', value: 'hip-hop' },
			{ label: 'pop', value: 'pop' },
			{ label: 'rnb', value: 'rnb' },
			{ label: 'rock', value: 'rock' },
			{ label: 'rocknroll', value: 'rock-and-roll' }
		],
		type: 'select'
	}
};
