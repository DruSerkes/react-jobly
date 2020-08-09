import * as Yup from 'yup';

const profileSchema = Yup.object({
	first_name : Yup.string().min(1, 'Must be at least 1 characters'),
	last_name  : Yup.string().min(1, 'Must be at least 1 character'),
	email      : Yup.string().email('Must be an email'),
	photo_url  : Yup.string().url('Must be a URL'),
	password   : Yup.string().min(5, 'Must be at least 5 characters').required('Required')
});

export default profileSchema;
