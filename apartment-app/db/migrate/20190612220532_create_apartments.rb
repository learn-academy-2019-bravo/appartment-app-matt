class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.references :user, foreign_key: true
      t.string :street_1
      t.string :street_2
      t.string :city
      t.integer :postal_code
      t.string :state
      t.string :country

      t.timestamps
    end
  end
end
