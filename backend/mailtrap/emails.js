import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTempates.js";
import { mailTrapClient } from "./mailtrap.config.js";
import { sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async(email, verificationToken) => {
     const recipient = [{email}]

     try {
       const response = await mailTrapClient.send({
        from:sender,
        to: recipient,
        subject:"Verify your email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        category: "Email verification"
       })

       console.log("Email sent successfully", response)
     } catch (error) {
       console.error("Error sending verification", error);
        throw new Error("Error sending verification email: ", error)
    }
};


export const sendWelcomeEmail = async (email, name) => {
	const recipient = [{ email }];

	try {
		const response = await mailTrapClient.send({
			from: sender,
			to: recipient,
			template_uuid: "5683a460-3d8f-443e-a6c3-71d2e275c9dc",
			template_variables: {
				company_info_name: "Auth Company",
				name: name,
			},
		});

		console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
	}
};