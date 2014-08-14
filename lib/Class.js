/**
 * Created by likelight on 14-8-14.
 */
var Class = function(){
  var kclass = function(){
      this.init.apply(this,arguments);
  }
  kclass.prototype.init = function(){};
  return kclass;
};

module.exports = Class;
