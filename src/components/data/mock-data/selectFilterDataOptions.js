export const payrollEnquiryOptions = [
	{ id: 1, label: 'Incorrect-Pay', value: 'Incorrect Pay' },
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
	{ id: 1, label: 'rap', value: 'rap' },
	{ id: 2, label: 'reggae', value: 'reggae' },
	{ id: 3, label: 'hip-hop', value: 'hip-hop' },
	{ id: 4, label: 'pop', value: 'pop' },
	{ id: 5, label: 'rnb', value: 'rnb' },
	{ id: 6, label: 'rock', value: 'rock' },
	{ id: 7, label: 'rocknroll', value: 'rock-and-roll' }
];

export const groupedOptions = [
	{ label: 'userType', options: userTypeOptions },
	{ label: 'musicGenres', options: musicGenreOptions },
	{ label: 'musicFormats', options: musicFormatOptions }
];
