class Api::FriendsController < ApplicationController

    def index
        @friends = User.friends
        render :index
    end

    def create
        
    end

    def show
        @friend = User.friends.find_by(friend_id: params[:friend_id])
        render :show
    end

    def destroy

    end
end
