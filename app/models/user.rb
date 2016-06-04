class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable, :registerable,
  devise :database_authenticatable, 
         :recoverable, :rememberable, :trackable, :validatable

  validates :first_name, :last_name, :middle_name, presence: true 

  has_many :tickets,    	class_name: 'Ticket', foreign_key: 'creator_id'
  has_many :done_tickets, class_name: 'Ticket', foreign_key: 'executor_id'

  def name
  	"#{self.last_name} #{self.first_name[0]}. #{self.middle_name[0]}."
  end

end
