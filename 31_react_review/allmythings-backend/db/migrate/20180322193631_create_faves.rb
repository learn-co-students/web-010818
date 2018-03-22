class CreateFaves < ActiveRecord::Migration[5.1]
  def change
    create_table :faves do |t|
      t.string :title
      t.string :url
      t.string :description
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
