class CreateColors < ActiveRecord::Migration[5.0]
  def change
    create_table :colors do |t|
      t.string :hex_code, null: false, index: true, unique: true
      t.string :rgb
    end
  end
end
