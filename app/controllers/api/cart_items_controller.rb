class Api::CartItemsController < ApplicationController
    
    def create
        # debugger
        @cart_item = CartItem.new(cart_item_params)
        # debugger
        if @cart_item.save
            # debugger
            render :show
        else
            debugger
            # render :json @cart_item.errors.full_messages, status: 422
            render :json ['cannot save item'], status: 422
        end
    end

    def show
        @cart_item = CartItem.find(params[:id])
    end
    
    def index 
        @cart_items = current_user.cart_items
    end

    def destroy
        # debugger
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy 
        render :show
    end

    private
    def cart_item_params 
        # debugger
        params.require(:cartItem).permit(:user_id, :item_id)
    end

end
