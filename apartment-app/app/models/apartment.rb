class Apartment < ApplicationRecord
  belongs_to :user
  
  validates :street_1, :street_2, :city, :postal_code, :state, :country, presence: true
  
end
