class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :like_id, null: false
      t.string :like_type, null: false
      
      t.timestamps
    end
    add_index :likes, [:like_id, :like_type]
  end
end
