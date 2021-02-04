export const payrollEnquiryType = [
	{ id: '1', label: 'Incorrect-Pay', value: 'Incorrect Pay' },
	{ id: 2, label: 'Missing-Expense', value: 'Missing Expense' },
	{ id: 3, label: 'Change-of-Bank-Details', value: 'Change of Bank Details' },
	{ id: 4, label: 'Change-of-Address', value: 'Change of Address' },
	{ id: 5, label: 'Other', value: 'Other' }
];

export const userTypeOptions = [
	{ id: 1, label: 'musician', value: 'musician' },
	{ id: 2, label: 'musicBuyer', value: 'musicBuyer' },
	{ id: 3, label: 'musicAgent', value: 'musicAgent' }
];

export const musicFormatOptions = [
	{ label: 'mp4', value: 'mp4' },
	{ label: 'wav', value: 'wav' },
	{ label: 'mp3', value: 'mp3' }
];

export const musicGenreOptions = [
	{ label: 'rap', value: 'rap' },
	{ label: 'reggae', value: 'reggae' },
	{ label: 'hip-hop', value: 'hip-hop' },
	{ label: 'pop', value: 'pop' },
	{ label: 'rnb', value: 'rnb' },
	{ label: 'rock', value: 'rock' },
	{ label: 'rocknroll', value: 'rock-and-roll' }
];

export const groupedOptions = [
	{ label: 'userType', options: userTypeOptions },
	{ label: 'musicGenres', options: musicGenreOptions },
	{ label: 'musicFormats', options: musicFormatOptions }
];
