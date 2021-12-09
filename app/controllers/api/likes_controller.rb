class Api::LikesController < ApplicationController

    def index
        @likes = Like.all
        render :index
    end

    def create
        @like = Like.new(like_params)

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like
            @like.destroy
            render json: {}
        else
            render json: ["Not your post!"], status: 404
        end
    end

    private

    def like_params
        params.require(:like).permit(:like_id, :like_type)
    end

end
