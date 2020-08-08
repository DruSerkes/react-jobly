import * as Yup from 'yup';

const registrationSchema = Yup.object({
	username  : Yup.string().min(5, 'Must be at least 5 characters').required('Required'),
	password  : Yup.string().min(5, 'Must be at least 5 characters').required('Required'),
	firstName : Yup.string().min(1, 'Must be at least 1 character'),
	lastName  : Yup.string().min(1, 'Must be at least 1 character'),
	email     : Yup.string()
});

export default registrationSchema;
