class Api::FriendsController < ApplicationController

    def create
        @friend = Friend.new(friend_params)

        if @friend.save
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friend.find_by(id: params[:id])
        if @friend
            @friend.destroy
            render json: {}
        else
            render json: ["Not your friend!"], status: 404
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:user_id, :friend_id, :status)
    end

end
