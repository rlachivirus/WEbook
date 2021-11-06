class Api::FriendsController < ApplicationController

    def create
        
    end

    def show

    end

    def destroy

    end

    private

    def friend_params
        params.require(:user).permit(:friends)
    end

end
