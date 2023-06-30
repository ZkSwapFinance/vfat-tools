
$(function() {
consoleInit(main)
  });

const TENX_CHEF_ABI = [{"type":"constructor","inputs":[{"type":"address","name":"_govToken","internalType":"contract GovernanceToken"},{"type":"address","name":"_devaddr","internalType":"address"},{"type":"address","name":"_liquidityaddr","internalType":"address"},{"type":"address","name":"_comfundaddr","internalType":"address"},{"type":"address","name":"_founderaddr","internalType":"address"},{"type":"uint256","name":"_rewardPerBlock","internalType":"uint256"},{"type":"uint256","name":"_startBlock","internalType":"uint256"},{"type":"uint256","name":"_halvingAfterBlock","internalType":"uint256"},{"type":"uint256","name":"_userDepFee","internalType":"uint256"},{"type":"uint256","name":"_devDepFee","internalType":"uint256"},{"type":"uint256[]","name":"_rewardMultiplier","internalType":"uint256[]"},{"type":"uint256[]","name":"_blockDeltaStartStage","internalType":"uint256[]"},{"type":"uint256[]","name":"_blockDeltaEndStage","internalType":"uint256[]"},{"type":"uint256[]","name":"_userFeeStage","internalType":"uint256[]"},{"type":"uint256[]","name":"_devFeeStage","internalType":"uint256[]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"FINISH_BONUS_AT_BLOCK","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"HALVING_AT_BLOCK","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"PERCENT_FOR_COM","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"PERCENT_FOR_DEV","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"PERCENT_FOR_FOUNDERS","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"PERCENT_FOR_LP","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"PERCENT_LOCK_BONUS_REWARD","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"REWARD_MULTIPLIER","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"REWARD_PER_BLOCK","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"START_BLOCK","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"addAuthorized","inputs":[{"type":"address","name":"_toAdd","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"authorized","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"blockDeltaEndStage","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"blockDeltaStartStage","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"bonusFinishUpdate","inputs":[{"type":"uint256","name":"_newFinish","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimReward","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimRewards","inputs":[{"type":"uint256[]","name":"_pids","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"comUpdate","inputs":[{"type":"address","name":"_newCom","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"comfundaddr","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"},{"type":"address","name":"_ref","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"dev","inputs":[{"type":"address","name":"_devaddr","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"devDepFee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"devFeeStage","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devaddr","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"founderUpdate","inputs":[{"type":"address","name":"_newFounder","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"founderaddr","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getGlobalAmount","inputs":[{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getGlobalRefAmount","inputs":[{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getNewRewardPerBlock","inputs":[{"type":"uint256","name":"pid1","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"forDev","internalType":"uint256"},{"type":"uint256","name":"forFarmer","internalType":"uint256"},{"type":"uint256","name":"forLP","internalType":"uint256"},{"type":"uint256","name":"forCom","internalType":"uint256"},{"type":"uint256","name":"forFounders","internalType":"uint256"}],"name":"getPoolReward","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getRefValueOf","inputs":[{"type":"address","name":"_user","internalType":"address"},{"type":"address","name":"_user2","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getTotalRefs","inputs":[{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract GovernanceToken"}],"name":"govToken","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"halvingUpdate","inputs":[{"type":"uint256[]","name":"_newHalving","internalType":"uint256[]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"liquidityaddr","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"lockUpdate","inputs":[{"type":"uint256","name":"_newlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"lockcomUpdate","inputs":[{"type":"uint256","name":"_newcomlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"lockdevUpdate","inputs":[{"type":"uint256","name":"_newdevlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"lockfounderUpdate","inputs":[{"type":"uint256","name":"_newfounderlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"locklpUpdate","inputs":[{"type":"uint256","name":"_newlplock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"lpUpdate","inputs":[{"type":"address","name":"_newLP","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingReward","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"poolExistence","inputs":[{"type":"address","name":"","internalType":"contract IERC20"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolId1","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accGovTokenPerShare","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"reclaimTokenOwnership","inputs":[{"type":"address","name":"_newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"removeAuthorized","inputs":[{"type":"address","name":"_toRemove","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"reviseDeposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"},{"type":"uint256","name":"_block","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"reviseWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"},{"type":"uint256","name":"_block","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"rewardMulUpdate","inputs":[{"type":"uint256[]","name":"_newMulReward","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"rewardUpdate","inputs":[{"type":"uint256","name":"_newReward","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevDepFee","inputs":[{"type":"uint256","name":"_devDepFees","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevFeeStage","inputs":[{"type":"uint256[]","name":"_devFees","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setStageEnds","inputs":[{"type":"uint256[]","name":"_blockEnds","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setStageStarts","inputs":[{"type":"uint256[]","name":"_blockStarts","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setUserDepFee","inputs":[{"type":"uint256","name":"_usrDepFees","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setUserFeeStage","inputs":[{"type":"uint256[]","name":"_userFees","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"starblockUpdate","inputs":[{"type":"uint256","name":"_newstarblock","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"usdOracle","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"userDelta","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"userDepFee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"userFeeStage","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"globalAmount","internalType":"uint256"},{"type":"uint256","name":"totalReferals","internalType":"uint256"},{"type":"uint256","name":"globalRefAmount","internalType":"uint256"}],"name":"userGlobalInfo","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"},{"type":"uint256","name":"rewardDebtAtBlock","internalType":"uint256"},{"type":"uint256","name":"lastWithdrawBlock","internalType":"uint256"},{"type":"uint256","name":"firstDepositBlock","internalType":"uint256"},{"type":"uint256","name":"blockdelta","internalType":"uint256"},{"type":"uint256","name":"lastDepositBlock","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"},{"type":"address","name":"_ref","internalType":"address"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"pid","indexed":true},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"pid","indexed":true},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false},{"type":"event","name":"SendGovernanceTokenReward","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"pid","indexed":true},{"type":"uint256","name":"amount","indexed":false},{"type":"uint256","name":"lockAmount","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","indexed":true},{"type":"uint256","name":"pid","indexed":true},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false}]

async function main() {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

   const TENX_CHEF_ADDR = "0x7Bd4028Ea117955eC92b7d684BB417dA54e4365C";
   const rewardTokenTicker = "TENX";
   const TENX_CHEF = new ethers.Contract(TENX_CHEF_ADDR, TENX_CHEF_ABI, App.provider);

   const rewardsPerWeek = await TENX_CHEF.REWARD_PER_BLOCK() / 1e18 * 604800 / 3.5;

    const tokens = {};
    const prices = await getTenetPrices();

    await loadGeneralChefContract(App, tokens, prices, TENX_CHEF, TENX_CHEF_ADDR, TENX_CHEF_ABI, rewardTokenTicker,
        "govToken", null, rewardsPerWeek, "pendingReward", [], "tenet");

    hideLoading();
  }
