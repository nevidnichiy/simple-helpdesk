class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable, :registerable,
  devise :database_authenticatable, 
         :recoverable, :rememberable, :trackable, :validatable

  validates :first_name, :last_name, :middle_name, presence: true 

  def name
  	"#{self.last_name} #{self.first_name[0]}. #{self.middle_name[0]}."
  end

end
