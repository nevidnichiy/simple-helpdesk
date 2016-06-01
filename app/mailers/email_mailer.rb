class EmailMailer < ApplicationMailer
	def test_email
  	mail(
  		from: 'noreply@milk.globino.ua',
  		to: 'nevidnichiy.s@milk.globino.ua',
  		subject: "This is test email"
  		)
	end
end
