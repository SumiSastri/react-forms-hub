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
			{ id: 1, label: 'rap', value: 'rap' },
			{ id: 2, label: 'reggae', value: 'reggae' },
			{ id: 3, label: 'hip-hop', value: 'hip-hop' },
			{ id: 4, label: 'pop', value: 'pop' },
			{ id: 5, label: 'rnb', value: 'rnb' },
			{ id: 6, label: 'rock', value: 'rock' },
			{ id: 7, label: 'rocknroll', value: 'rock-and-roll' }
		],
		type: 'select'
	}
};
